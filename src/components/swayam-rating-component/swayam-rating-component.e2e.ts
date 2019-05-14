/*import { newE2EPage } from '@stencil/core/testing';

describe('swayam-rating-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<swayam-rating-component></swayam-rating-component>');
    const element = await page.find('swayam-rating-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<swayam-rating-component></swayam-rating-component>');
    const component = await page.find('swayam-rating-component');
    const element = await page.find('swayam-rating-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});*/
