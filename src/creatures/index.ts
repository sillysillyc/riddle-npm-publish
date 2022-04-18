interface IHumanParams {
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  skin: "white" | "black" | "yellow";
}

export abstract class Human {
  public firstName: string;
  public lastName: string;
  public gender: string;
  public isDoingThings = false;
static whu =''
  constructor(props: IHumanParams) {
    const { firstName, lastName, gender } = props;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }

  doing = (handlerOpt: { key: string; time?: any }, callback: () => void) => {
    this.isDoingThings = true;
    const timer = setTimeout(() => {
      this.isDoingThings = false;
      callback && callback();
      clearTimeout(timer);
    }, handlerOpt.time || 3000);
  };

  sleep = (time: number) => {
    if (this.isDoingThings) {
      console.log("doing other things");
      return;
    }
    console.log("sleeping");
    this.doing({ key: "sleep", time }, () => {
      console.log("finish eating");
      console.log(this.isDoingThings);
    });
  };
  eat = (food = "rice") => {
    if (this.isDoingThings) {
      console.log("doing other things");
      return;
    }
    console.log("eating", food);
    console.log(this.isDoingThings);
    this.doing({ key: "eat" }, () => {
      console.log("finish eating");
      console.log(this.isDoingThings);
    });
  };
}

interface IAsianHumanParams extends IHumanParams {
  [K: string]: any;
}

export class AsianHuman extends Human {
  constructor(params: IAsianHumanParams) {
    super({ ...params, skin: "yellow" });
  }
}

interface IAfricanHumanParams extends IHumanParams {
  [K: string]: any;
}

export class AfricanHuman extends Human {
  constructor(params: IAfricanHumanParams) {
    super({ ...params, skin: "black" });
  }
}

interface IWesternHumanParams extends IHumanParams {
  [K: string]: any;
}

export class WesternHuman extends Human {
  constructor(params: IWesternHumanParams) {
    super({ ...params, skin: "white" });
  }
}
