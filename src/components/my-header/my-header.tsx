import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: true
})
export class MyHeader {

  @Prop() name: string;

  private getAppName(): string{
    return this.name;
  }

  render() {
    return <nav class="navbar navbar-dark bg-boeing">
                <a class="navbar-brand" href="#">
                {this.getAppName()}</a>
            </nav>;
  }
}
