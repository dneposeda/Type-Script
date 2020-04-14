import { timeout } from '../decorators';

export abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;

    static department: string = 'Research';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }

    constructor(public title: string, protected year: number) {
        // console.log('Creating a new ReferenceItem...');
    }

    private m1() {
        // console.log(`${this.title} was published in ${this.year}`);
    }

    @timeout(3000)
    protected printItem(): void {
        this.m1();
        // console.log(`Department ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}