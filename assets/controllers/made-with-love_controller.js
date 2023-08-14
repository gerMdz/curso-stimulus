import {Controller} from "@hotwired/stimulus";

import React from "react";
import MadeWithLove from "../components/MadeWithLove";

export default class extends Controller {
    connect() {

        // React 18
        // import('react-dom/client').then( (ReactDom) => {
        //   ReactDom.createRoot(this.element).render(<MadeWithLove />)
        // })

        import('react-dom').then((ReactDom) => {
            ReactDom.default.render(
                <MadeWithLove />,
                this.element
            )
        })
    }
}