// Cycle Model This model contains four stages of exercise
import {CycleModel} from "./cycle-model";

export class ProgramItem
{
    constructor(public repeat : number, public cycle : CycleModel )
    {
    }
}

export class ProgramModel {
    public items : ProgramItem[];
    constructor(public title : string) {
        this.items = [];
        this.addItem(new ProgramItem( 5, new CycleModel("warm", 4, 7, 8, 4)));
        this.addItem(new ProgramItem( 8, new CycleModel("main", 4, 7, 8, 4)));
        this.addItem(new ProgramItem( 4, new CycleModel("relax", 4, 7, 8, 4)));
        this.addItem(new ProgramItem( 3, new CycleModel("end", 4, 7, 8, 4)));
    }

    public addNew()
    {
        this.addItem(new ProgramItem( 5, new CycleModel("new", 4, 7, 8, 4)));
    }

    public static createProgramItem()
    {
         return new ProgramItem( 5, new CycleModel("new", 4, 7, 8, 4));
    }

    addItem( item : ProgramItem) {
        this
            .items
            .push( item);
    }

}