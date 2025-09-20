// Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp Order
document.getElementById("whatsappBtn").addEventListener("click", function(){
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const product = document.getElementById("productSelect").value;
  const note = document.getElementById("note").value;

  const msg = `নাম: ${name}%0Aফোন: ${phone}%0Aপ্রোডাক্ট: ${product}%0Aঠিকানা/মন্তব্য: ${note}`;
  window.open(`https://wa.me/8801730947333?text=${msg}`, "_blank");
});

// Form Submit
document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("ধন্যবাদ! আপনার অর্ডার রিসিভ হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।");
});