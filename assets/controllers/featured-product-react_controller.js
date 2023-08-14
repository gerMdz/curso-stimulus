import {Controller} from "@hotwired/stimulus";
import React from "react";
import FeaturedProduct from "../components/FeaturedProduct";

export default class extends Controller {
    static values = {
        product: Object
    }
    connect() {
        import('react-dom').then((ReactDom) => {
            ReactDom.default.render(
                <FeaturedProduct product={this.productValue}/>,
                this.element
            )
        })

        // ReactDom.render(
        //     <ProductoDestacado product={this.productValue} />,
        //     this.element
        // )
    }
}