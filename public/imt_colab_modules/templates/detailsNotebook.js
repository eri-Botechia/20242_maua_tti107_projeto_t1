const renderDetailsNotebook = (data)=>{
    const {id, tagItem, imgUrl, theme, module, classroom }=data
    return (`<div class="container products-wrapper">
		<div class="row">
			<div class="col-12">
				<h2 class="products-title">${tagItem}</h2>
			</div>
		</div>
		<div class="product-detail">
			<div class="row">
				<div class="col-12 col-lg-8">
					<img src="${imgUrl}" alt="product image" class="product-detail-img">
					<p class="product-detail-description">
						<%=productoDetalle.description%>
					</p>
				</div>
				<div class="col-12 col-lg-4">
					<article class="product-detail-info">
						<h2 class="product-detail-title">${tagItem}</h2>
						
							<p class="product-detail-price small">
								<span>ID: ${id}</span>
							</p>
							<p class="product-detail-price">
								${theme} - ${module} -${classroom} 
							</p>

						<ul class="actions-list">
							<li>
								<i class="fas fa-list"></i>
								<p>${description}
                                </p>
							</li>
							<li>
								<i class="fas fa-store"></i>
								<p>Retiro gratis en locales del vendedor</p>
							</li>
						</ul>

						<a href="#" class="buy-now-button">COMPRAR AHORA</a>
						<hr>

						<a href="/products/edit/<%=productoDetalle.id%>" class="action-button edit" >EDITAR PRODUCTO</a>
						<form action="/products/<%=productoDetalle.id%>?_method=DELETE" method="POST" style="display: inline-flex" onsubmit="return confirm('Esta seguro que desea eliminarlo?');"> 
							<button type="submit" class="action-button delete">ELIMINAR</button>
						</form>
					</article>
				</div>
			</div>
		</div>
	</div>`)
}