import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('New notification');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 caracters', () => {
    expect(() => new Content('New')).toThrow();
  });

  it('should not be able to create a notification content with less than 240 caracters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
