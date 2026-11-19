// ===== EASY SETTINGS =====
const CANVAS_SIZE = "27.5 × 19.6 inches(70x50cm)"; // CHANGE CANVAS SIZE HERE
const CANVAS_FORMAT = "Landscape Canvas(unframed)"; // CHANGE FORMAT HERE
const ARTIST_EMAIL = "enluisheist@gmail.com"; // PUT YOUR EMAIL HERE
const DM_LINK = "https://www.instagram.com/enluis_heist/"; // PUT YOUR DM LINK HERE
// =========================
document.getElementById("size").textContent=CANVAS_SIZE;
document.getElementById("format").textContent=CANVAS_FORMAT;
document.getElementById("year").textContent=new Date().getFullYear();
const subject=encodeURIComponent("Enquiry about Epiphaneia by Enluis Heist");
document.getElementById("email").href=`mailto:${ARTIST_EMAIL}?subject=${subject}`;
document.getElementById("dm").href=DM_LINK;