function atualizarBadge() {
  const carrinho = JSON.parse(localStorage.getItem('carrinhoGranSafety')) || [];
  const totalQtd = carrinho.reduce((soma, item) => soma + (item.qtd || 1), 0);

  const badgeFlutuante = document.getElementById('badgeCarrinho');
  const badgeTopo = document.getElementById('badgeCarrinhoTopo');

  if (badgeFlutuante) {
    badgeFlutuante.textContent = totalQtd > 0 ? totalQtd : '';
  }

  if (badgeTopo) {
    badgeTopo.textContent = totalQtd > 0 ? totalQtd : '';
  }
}

// Atualiza no carregamento da página
window.onload = atualizarBadge;
