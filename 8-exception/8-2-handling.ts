class NetwortkClient {
  tryConnect(): void {
    throw new Error('no network!!!')
  }
}

class UserService {
  constructor(private client: NetwortkClient) { }

  login() {
    this.client.tryConnect();
    // login...
  }
}

class App {
  constructor(private userService: UserService) { }
  run() {
    try {
      this.userService.login();
    } catch (error) {
      this.userService.login();
      console.log(`catched!! ${error}`);  // 의미 있는 곳에서 에러 처리하기
    }
  }
}

const client = new NetwortkClient();
const service = new UserService(client);
const app = new App(service);
app.run();