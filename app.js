async function loadDigests() {
  const root = document.getElementById("digests");
  try {
    const res = await fetch("./digests.json", { cache: "no-store" });
    if (!res.ok) throw new Error("Could not load digests.json");
    const data = await res.json();
    document.getElementById("site-title").textContent = data.siteTitle || "AI Brief";
    document.title = data.siteTitle || "AI Brief";
    document.getElementById("tagline").textContent = data.tagline || "";

    const digests = Array.isArray(data.digests) ? data.digests : [];
    if (!digests.length) {
      root.innerHTML = "<p class=\"error\">No digests yet.</p>";
      return;
    }

    root.innerHTML = digests.map((digest) => {
      const stories = (digest.stories || []).map((story) => `
        <article class="story">
          <h3>${escapeHtml(story.headline || "")}</h3>
          <p>${escapeHtml(story.summary || "")}</p>
        </article>
      `).join("");
      return `
        <section class="digest">
          <h2>${escapeHtml(digest.title || digest.date || "Digest")}</h2>
          ${stories}
        </section>
      `;
    }).join("");
  } catch (err) {
    root.innerHTML = `<p class="error">${escapeHtml(err.message)}</p>`;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

loadDigests();
