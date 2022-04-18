// const { AsianPerson } = require("../../src/creatures");

// import SoundPlayer, { mockPlaySoundFile } from "../src/sound-player";
// import SoundPlayerConsumer from "../src/sound-player-consumer";
// jest.mock("./sound-player"); // SoundPlayer is now a mock constructor

// beforeEach(() => {
//   // Clear all instances and calls to constructor and all methods:
//   AsianPerson.mockClear();
//   mockPlaySoundFile.mockClear();
// });

// it("We can check if the consumer called the class constructor", () => {
//   const soundPlayerConsumer = new SoundPlayerConsumer();
//   expect(SoundPlayer).toHaveBeenCalledTimes(1);
// });

// it("We can check if the consumer called a method on the class instance", () => {
//   const soundPlayerConsumer = new SoundPlayerConsumer();
//   const coolSoundFileName = "song.mp3";
//   soundPlayerConsumer.playSomethingCool();
//   expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
// });

test("", () => {
  expect(1 + 1).toBe(2);
});
