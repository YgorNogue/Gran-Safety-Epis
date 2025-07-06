function atualizarBadge() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const badge = document.getElementById('badgeCarrinho');
  if (badge) {
    badge.textContent = carrinho.length > 0 ? carrinho.length : '';
  }
}

// Atualiza no carregamento da página
window.onload = atualizarBadge;
