(function () {
  const { jsPDF } = window.jspdf;
  const addBtn = document.getElementById("addBtn");
  const itemsDiv = document.getElementById("items");
  const generateBtn = document.getElementById("generateBtn");
  const clearBtn = document.getElementById("clearBtn");

  let items = [];

  function renderItems() {
    itemsDiv.innerHTML = "";
    items.forEach((it, idx) => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
            <div style="flex:1">${idx + 1}. <strong>${escapeHtml(
        it.name
      )}</strong> — ${escapeHtml(it.city)}, ${escapeHtml(it.country)}</div>
            <button data-idx="${idx}" class="del">Delete</button>
          `;
      itemsDiv.appendChild(div);
    });

    // attach delete handlers
    Array.from(document.querySelectorAll(".del")).forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const i = Number(e.target.dataset.idx);
        items.splice(i, 1);
        renderItems();
      });
    });
  }

  addBtn.addEventListener("click", () => {
    const name = document.getElementById("field1").value.trim();
    const city = document.getElementById("field2").value.trim();
    const country = document.getElementById("field3").value.trim();
    if (!name && !city && !country) {
      alert("Kuch to daalain pehle.");
      return;
    }
    items.push({ name, city, country });
    document.getElementById("field1").value = "";
    document.getElementById("field2").value = "";
    document.getElementById("field3").value = "";
    renderItems();
  });

  clearBtn.addEventListener("click", () => {
    if (confirm("Saare items clear karna hain?")) {
      items = [];
      renderItems();
    }
  });

  generateBtn.addEventListener("click", () => {
    if (items.length === 0) {
      alert("Koi item nahi hai.");
      return;
    }
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 40;
    const lineHeight = 16;
    let y = margin;

    doc.setFontSize(18);
    doc.text("Exported Data", 40, y);
    y += 24;

    doc.setFontSize(11);
    doc.text("Generated: " + new Date().toLocaleString(), margin, y);
    y += 18;

    doc.setDrawColor(200);
    doc.line(margin, y, 595 - margin, y);
    y += 12;

    // header
    doc.setFontSize(12);
    doc.text("No.", margin, y);
    doc.text("Name", margin + 40, y);
    doc.text("City", margin + 220, y);
    doc.text("Country", margin + 360, y);
    y += 14;

    doc.setFontSize(10);
    items.forEach((it, idx) => {
      if (y > 760) {
        // new page
        doc.addPage();
        y = margin;
      }
      doc.text(String(idx + 1), margin, y);
      doc.text(truncate(it.name, 30), margin + 40, y);
      doc.text(truncate(it.city, 20), margin + 220, y);
      doc.text(truncate(it.country, 20), margin + 360, y);
      y += lineHeight;
    });

    doc.save("exported-data.pdf");
  });

  // helpers
  function escapeHtml(s) {
    return (s || "").replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[m])
    );
  }
  function truncate(s, n) {
    if (!s) return "";
    return s.length > n ? s.slice(0, n - 1) + "…" : s;
  }
})();
