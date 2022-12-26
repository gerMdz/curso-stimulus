import {Controller} from '@hotwired/stimulus';
import {useClickOutside, useDebounce} from "stimulus-use";

export default class extends Controller {

    static values = {
        url: String,
    }
    static debounces = ['search']

    static targets = ['result']

    connect() {
        useClickOutside(this);
        useDebounce(this);
    }

   onSearchInput(event) {
        this.search(event.currentTarget.value)
    }
     async search(query){
        const params = new URLSearchParams({
            q: query,
            preview: 1
        });

        const response = await fetch(`${this.urlValue}?${params.toString()}`);
        this.resultTarget.innerHTML = await response.text();

        // console.log(await response.text());


    }

    clickOutside(event){
        this.resultTarget.innerHTML = '';
    }


}
