export const CartApp = () => {
    return (
        <>
            <div className="container">
                <h1>Shopping cart</h1>

                <div className="row">
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">CORSAIR</h5>
                                <p className="card-text">Mechanical keyboard</p>
                                <p className="card-text">$ 150</p>
                                <button className="btn btn-primary">Add to the cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Logitech</h5>
                                <p className="card-text">Wireless mouse</p>
                                <p className="card-text">$ 50</p>
                                <button className="btn btn-primary">Add to the cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Samsung</h5>
                                <p className="card-text">Galaxy S21</p>
                                <p className="card-text">$ 800</p>
                                <button className="btn btn-primary">Add to the cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Apple</h5>
                                <p className="card-text">iPhone 13</p>
                                <p className="card-text">$ 999</p>
                                <button className="btn btn-primary">Add to the cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Dell</h5>
                                <p className="card-text">Inspiron 15</p>
                                <p className="card-text">$ 1200</p>
                                <button className="btn btn-primary">Add to the cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Sony</h5>
                                <p className="card-text">WH-1000XM4 Headphones</p>
                                <p className="card-text">$ 350</p>
                                <button className="btn btn-primary">Add to the cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">ViewSonic</h5>
                                <p className="card-text">Display 45"</p>
                                <p className="card-text">$ 400</p>
                                <button className="btn btn-primary">Add to the cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">RYZEN</h5>
                                <p className="card-text">AMD Ryzen 5000 Series 9</p>
                                <p className="card-text">$ 500</p>
                                <button className="btn btn-primary">Add to the cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Asus</h5>
                                <p className="card-text">Laptop Zephyrus</p>
                                <p className="card-text">$ 2500</p>
                                <button className="btn btn-primary">Add to the cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-4 w-50">
                    <table className="table table-striped table-bordered table-hover table-responsive">
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>CORSAIR Keyboard</td>
                            <td>$150</td>
                            <td>1</td>
                            <td>$150</td>
                            <td>
                                <button className="btn btn-danger">Remove</button>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan="4" className="text-end fw-bold">Total:</td>
                            <td colSpan="1" className="text-start fw-bold">$ 1000</td>
                        </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </>
    )
}