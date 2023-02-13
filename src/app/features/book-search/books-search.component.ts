import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchParams} from "../../core/models/search-params.interface";
import {CollectionResultModel} from "../../core/models/collection-result.interface";
import {Volume} from "../../core/models/volume.interface";
import {debounceTime, distinctUntilChanged, Subscription, switchMap} from "rxjs";
@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss'],
})
export class BooksSearchComponent implements OnInit{
  formGroup: FormGroup
  debouncerSub : Subscription | undefined = new Subscription()

  searchedNumberOfBooks : number = 5;

  @Output() onSearchNumberChange : EventEmitter<number> = new EventEmitter<number>()

  @Output() search: EventEmitter<SearchParams | null> = new EventEmitter<SearchParams | null>();
  @Output() bookList : EventEmitter<CollectionResultModel<Volume[]>> = new EventEmitter
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      searchTerm: new FormControl('', Validators.required),
      selectNumber : new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
        this.changeNumberOfBooks()
  }

  get searchTerm(): AbstractControl {
    return this.formGroup.get('searchTerm') as AbstractControl;
  }

  get selectNumber() : AbstractControl{
    return this.formGroup.get('selectNumber') as AbstractControl;
  }

  onSearch(): void {
      this.debouncerSub = this.formGroup.get('searchTerm')?.valueChanges.pipe(
        debounceTime(800)
      )
        .subscribe(
          () => {
              this.search.emit(this.formGroup.value)
          }
        )
      }

  changeNumberOfBooks():void{
    this.onSearchNumberChange.emit(this.searchedNumberOfBooks);
  }
}
