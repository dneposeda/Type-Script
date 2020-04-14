import { ReferenceItem } from './ReferenceItem';
import { positiveInteger } from '../decorators';

export default class extends ReferenceItem {

    private _copies: number;


    get copies(): number {
        return this._copies;
    }

    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }

    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem() {
        super.printItem();
        // console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        // console.log(`${this.title} - ${this.year}`);
    }


}