beforeAll(() => {
  console.info("beforeAll");
});

afterAll(() => {
  console.info("afterall");
});

beforeEach(() => {
  console.info("beforeeach");
});

afterEach(() => {
  console.info("aftereach");
});

test("test outer", () => {
  console.info("test outer");
});

describe("test inner", () => {
  beforeAll(() => {
    console.info("beforeAll");
  });

  afterAll(() => {
    console.info("afterAll");
  });

  test("test inner", () => {
    console.info("test outer");
  });
});
