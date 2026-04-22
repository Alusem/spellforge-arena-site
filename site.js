(function () {
	const cfg = window.SPELLFORGE_LANDING || {};

	function show(el, visible) {
		if (!el) return;
		el.classList.toggle("is-hidden", !visible);
	}

	function setHref(el, url) {
		if (!el || !url) return false;
		el.href = url;
		return true;
	}

	document.addEventListener("DOMContentLoaded", function () {
		const email = (cfg.contactEmail || "").trim();
		const mailEl = document.getElementById("contact-mail-link");
		const emailLine = document.getElementById("contact-email-line");
		const emailPlaceholder = document.getElementById("contact-email-placeholder");
		const emailOk = !!(mailEl && email && email.includes("@"));
		if (emailOk) {
			mailEl.href = "mailto:" + encodeURIComponent(email) + "?subject=" + encodeURIComponent("Spellforge Arena — contato");
			mailEl.textContent = email;
		}
		show(emailLine, emailOk);
		show(emailPlaceholder, !emailOk);

		const social = cfg.social || {};
		const map = [
			["social-discord", social.discord],
			["social-youtube", social.youtube],
			["social-instagram", social.instagram],
			["social-x", social.twitterX],
			["social-itch", social.itchio],
			["social-steam", social.steam],
		];
		for (const [id, url] of map) {
			const a = document.getElementById(id);
			const li = a?.closest("li");
			const ok = url && setHref(a, url);
			show(li, ok);
		}

		const d = cfg.donation || {};
		const p1 = document.getElementById("donate-primary");
		const p2 = document.getElementById("donate-secondary");
		const u1 = (d.primary && d.primary.url) || "";
		const u2 = (d.secondary && d.secondary.url) || "";
		if (p1) {
			if (u1) {
				p1.href = u1;
				if (d.primary.label) p1.textContent = d.primary.label;
			} else show(p1, false);
		}
		if (p2) {
			if (u2) {
				p2.href = u2;
				if (d.secondary.label) p2.textContent = d.secondary.label;
			} else show(p2, false);
		}

		const pix = (cfg.pixKey || "").trim();
		const pixBlock = document.getElementById("pix-block");
		const pixText = document.getElementById("pix-key-text");
		const copyBtn = document.getElementById("pix-copy");
		if (pix && pixBlock && pixText) {
			pixText.textContent = pix;
			show(pixBlock, true);
			if (copyBtn) {
				copyBtn.addEventListener("click", async function () {
					try {
						await navigator.clipboard.writeText(pix);
						copyBtn.textContent = "Copiado!";
						setTimeout(function () {
							copyBtn.textContent = "Copiar chave";
						}, 2000);
					} catch (_) {
						copyBtn.textContent = "Copie manualmente";
					}
				});
			}
		}

		const noDonation = !u1 && !u2 && !pix;
		const donateHint = document.getElementById("donate-config-hint");
		if (donateHint) show(donateHint, noDonation);
	});
})();
