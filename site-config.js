/**
 * Personalize estes valores antes de publicar (GitHub Pages, Vercel, etc.).
 * Deixe "" para ocultar botões / blocos que não use.
 *
 * Pix — o que pôr em pixKey:
 * A chave que aparece no teu banco em “Pix copia e cola” / “Minhas chaves”.
 * Tipos aceites pelo Pix: e-mail, telefone (+55…), CPF/CNPJ, ou chave aleatória (EVP).
 * Preferência: chave aleatória ou e-mail de projeto — evita expor CPF no site.
 */
window.SPELLFORGE_LANDING = {
	contactEmail: "seu-email@exemplo.com",
	social: {
		discord: "",
		youtube: "",
		instagram: "",
		twitterX: "",
		itchio: "",
		steam: "",
	},
	donation: {
		primary: { label: "Apoiar no Apoia.se", url: "https://apoia.se/spellforge-arena" },
		secondary: { label: "", url: "" },
	},
	/** Texto exacto da chave (uma linha, sem aspas a mais). Ex.: "email@dominio.com" ou UUID da chave aleatória */
	pixKey: "",
	/** Opcional: nome que o apoiante deve ver no app do banco ao confirmar o destinatário */
	pixRecipientName: "",
};
