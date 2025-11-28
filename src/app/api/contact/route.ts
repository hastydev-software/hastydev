import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, empresa, email, mensagem } = body || {};

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const subject = `Novo contato via site — ${nome}${empresa ? ` (${empresa})` : ""}`;
    const html = `
      <div style="font-family: Arial, sans-serif; color: #0e0f17;">
        <h2>Novo contato via site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Empresa:</strong> ${empresa || "—"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${(mensagem || "").replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    // Gmail OAuth2 credentials from env
    const {
      GMAIL_CLIENT_ID,
      GMAIL_CLIENT_SECRET,
      GMAIL_REFRESH_TOKEN,
      GMAIL_USER,
    } = process.env as Record<string, string | undefined>;

    if (!GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN || !GMAIL_USER) {
      return NextResponse.json({ error: "Credenciais do Gmail ausentes" }, { status: 500 });
    }

    // Create OAuth2 client and fetch access token from refresh token
    const oAuth2Client = new google.auth.OAuth2(
      GMAIL_CLIENT_ID,
      GMAIL_CLIENT_SECRET
    );
    oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: GMAIL_USER,
        clientId: GMAIL_CLIENT_ID,
        clientSecret: GMAIL_CLIENT_SECRET,
        refreshToken: GMAIL_REFRESH_TOKEN,
        accessToken: accessToken?.token as string,
      },
    });

    const toPrimary = "guilherme@dseclab.io";
    const bccList = ["tecnologia@dseclab.io", "guilherme@dseclab.io"]; // duplicates are fine, Gmail dedupes

    const info = await transporter.sendMail({
      from: `HastyDev <no-reply@dseclab.io>`,
      to: toPrimary,
      bcc: bccList,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true, id: info.messageId }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Erro ao enviar" }, { status: 500 });
  }
}
