// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Copy email address
const copyBtn = document.getElementById("copyEmail");
copyBtn.addEventListener("click", async () => {
  const email = copyBtn.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const t = document.createElement("textarea");
    t.value = email;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    t.remove();
  }
  copyBtn.textContent = "Copied";
  setTimeout(() => (copyBtn.textContent = "Copy email"), 2000);
});