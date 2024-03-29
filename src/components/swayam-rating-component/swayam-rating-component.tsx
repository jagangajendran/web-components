import  { Component, Prop, State , Event, EventEmitter} from  '@stencil/core';

@Component({
  tag: 'swayam-rating',
  styleUrl: 'swayam-rating-component.css',
  shadow: true
})
export  class  SwayamRatingComponent  {
  @Prop({ mutable: true }) maxValue: number = 5;
  @Prop({ mutable: true }) value: number = 0;
  @State() starList: Array<object> = [];
  @Event() onRatingUpdated: EventEmitter;

  componentWillLoad() {
    this.createStarList(this.value);
  }

  setValue(newValue) {
    this.value = newValue;
    this.createStarList(this.value);
    this.onRatingUpdated.emit({ value: this.value });
  }


  createStarList(numberOfStars: number) {
    let starList = [];

    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= numberOfStars) {
        starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2605;</span>);
      } else {
        starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2606;</span>);
      }
    }

    this.starList = starList;
  }


  render() {
    return  (
      <div>
        {this.starList}
      </div>
    );
   }
}
