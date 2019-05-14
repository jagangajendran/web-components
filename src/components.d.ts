/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyHeader {
    'name': string;
  }
  interface MyHeaderAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface SwayamRating {
    'maxValue': number;
    'value': number;
  }
  interface SwayamRatingAttributes extends StencilHTMLAttributes {
    'maxValue'?: number;
    'onOnRatingUpdated'?: (event: CustomEvent) => void;
    'value'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyHeader': Components.MyHeader;
    'SwayamRating': Components.SwayamRating;
  }

  interface StencilIntrinsicElements {
    'my-header': Components.MyHeaderAttributes;
    'swayam-rating': Components.SwayamRatingAttributes;
  }


  interface HTMLMyHeaderElement extends Components.MyHeader, HTMLStencilElement {}
  var HTMLMyHeaderElement: {
    prototype: HTMLMyHeaderElement;
    new (): HTMLMyHeaderElement;
  };

  interface HTMLSwayamRatingElement extends Components.SwayamRating, HTMLStencilElement {}
  var HTMLSwayamRatingElement: {
    prototype: HTMLSwayamRatingElement;
    new (): HTMLSwayamRatingElement;
  };

  interface HTMLElementTagNameMap {
    'my-header': HTMLMyHeaderElement
    'swayam-rating': HTMLSwayamRatingElement
  }

  interface ElementTagNameMap {
    'my-header': HTMLMyHeaderElement;
    'swayam-rating': HTMLSwayamRatingElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
