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

		const heroApoia = document.getElementById("hero-apoia-link");
		if (heroApoia && u1) {
			heroApoia.href = u1;
			if (d.primary && d.primary.label) {
				heroApoia.textContent = "Apoia.se";
			}
		}

		const pix = (cfg.pixKey || "").trim();
		const pixBlock = document.getElementById("pix-block");
		const pixText = document.getElementById("pix-key-text");
		const copyBtn = document.getElementById("pix-copy");
		const pixPh = document.getElementById("pix-placeholder-note");
		if (pixPh) {
			show(pixPh, !pix);
		}

		if (pix && pixBlock && pixText) {
			pixText.textContent = pix;
			show(pixBlock, true);
			const recip = (cfg.pixRecipientName || "").trim();
			const recipEl = document.getElementById("pix-recipient-line");
			if (recipEl) {
				if (recip) {
					recipEl.textContent = "Beneficiário (conferir no banco): " + recip;
					show(recipEl, true);
				} else {
					show(recipEl, false);
				}
			}
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
