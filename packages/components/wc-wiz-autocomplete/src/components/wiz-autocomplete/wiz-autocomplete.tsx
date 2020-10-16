import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'wiz-autocomplete',
  styleUrl: 'wiz-autocomplete.css',
  shadow: true,
})
export class WizAutocomplete {

  @Prop() searchActive;
  @Prop() placeholder;
  @Prop() data;
  @Prop() searchResult;
  @Prop() searchItem: any;
  @State() inputString: string;
  @Event() returnAutoComplete: EventEmitter;
  @Event() getInputValue: EventEmitter;

  public dataFilter: any = [];
  public value: string;
  @State() itemSelected: any = [];



  @Watch('data')
  parseMyArrayProp(newValue: string) {
    if (newValue && typeof newValue !== 'object') {
      this.data = JSON.parse(newValue);
    } else {
      this.data = newValue;
    }
  }

  componentWillLoad() {
    this.configInitial();
    this.parseMyArrayProp(this.data);
  }

  setInformation(r, result) {
    this.returnAutoComplete.emit(r);
    this.getInputValue.emit(result);
    this.itemSelected = r;
    this.dataFilter = [];
    this.render();
  }


  configInitial() {
    if (!this.placeholder) {
      this.placeholder = 'Pesquisar';
    }
  }

  handleChange(event) {
    this.inputString = event.target.value;
    this.search(this.inputString);
    if (event.target.validity.typeMismatch) {
    }
  }

  clearValue() {
    this.value = '';
    this.dataFilter = [];
    this.returnAutoComplete.emit('');
    this.itemSelected = [];
  }

  search(e) {
    const searchArray = e.split(' ');
    this.dataFilter = this.data;
    if (e.length === 0) {
      this.dataFilter = [];
      this.searchActive = false;
    } else {
      this.searchActive = true;
      searchArray.forEach(element => {
        this.dataFilter = this.dataFilter.filter(r => r['' + this.searchItem + ''].toLowerCase().includes(element.toLowerCase()));
      });
    }
  }



  render() {
    return (
      <div class="auto-complete">
        {
          this.itemSelected.length == 0
            ? <span>
              <input onInput={(event) => this.handleChange(event)} class={`input ${this.searchActive ? ' searchActiveInput' : ' '}`} type="text" />
              <div class={`title ${this.searchActive ? ' searchActiveTitle' : ''}`}>
                <label class="label-title">{this.placeholder}</label>
              </div>

              <div class="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path fill="#50555a"
                    d="M7.563 1a6.57 6.57 0 0 1 6.562 6.563c0 1.592-.57 3.053-1.516 4.19l4.206 4.179a.625.625 0 0 1-.88.886l-4.213-4.183a6.532 6.532 0 0 1-4.16 1.49 6.566 6.566 0 0 1-3.212-.839.625.625 0 1 1 .613-1.09 5.313 5.313 0 0 0 7.912-4.633A5.319 5.319 0 0 0 7.562 2.25 5.319 5.319 0 0 0 2.25 7.563c0 .922.24 1.831.694 2.627a.625.625 0 0 1-1.086.62A6.564 6.564 0 0 1 7.562 1z" />
                  <path fill="none" stroke="#50555a" stroke-miterlimit="50" stroke-width=".5"
                    d="M7.563 1a6.57 6.57 0 0 1 6.562 6.563c0 1.592-.57 3.053-1.516 4.19l4.206 4.179a.625.625 0 0 1-.88.886l-4.213-4.183a6.532 6.532 0 0 1-4.16 1.49 6.566 6.566 0 0 1-3.212-.839.625.625 0 1 1 .613-1.09 5.313 5.313 0 0 0 7.912-4.633A5.319 5.319 0 0 0 7.562 2.25 5.319 5.319 0 0 0 2.25 7.563c0 .922.24 1.831.694 2.627a.625.625 0 0 1-1.086.62A6.564 6.564 0 0 1 7.562 1z" />
                </svg>

              </div>
            </span>
            : <div class="item-select">
              {this.itemSelected[0][this.searchResult]}
              <div class="btn-clear">
                <a onClick={() => this.clearValue()}>Limpar</a>
              </div>
            </div>
        }



        <div class="result-auto-complete">
          <div class="itens-container">
            {this.dataFilter.map((result) =>
              <a class="item-result" onClick={() => this.setInformation(this.dataFilter, result)} >
                <div class="wiz-auto-complete-item">
                  {result[this.searchResult]}
                </div>
              </a>
            )}
          </div>
        </div>

      </div>
    );
  }

}
{/* <input [ngClass]="{'searchActiveInput': searchActive}" class="input" [(ngModel)]="value" [disabled]="itemSelected" [value]="itemSelected"
(keyup)="search($event.target.value)" type="text" /> */}
