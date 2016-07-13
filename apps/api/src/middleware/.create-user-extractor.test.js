const a = require("../utils/asyncify");
const createUserExtractorMw = require("./create-user-extractor");
const tap = require("tap");

tap.test("middleware/create-user-extractor", a(function* (tap) {
    const next = a(function* (){});
    const logger = {
        child: function(obj){
            return this;
        },
        error: function(obj){},
    };



    yield a(function* (){
        const userExtractorMw = createUserExtractorMw(logger);
        const ctx = {
            state: {
                token: {
                    data: {
                        userId: "testuser",
                    },
                },
            },
        };

        yield userExtractorMw(ctx, next);

        const actual = ctx.state.userId;
        const expected = "testuser";

        tap.equal(actual, expected, "With correct state, userId should be set as ctx.state.userId");
    })();

    yield a(function* (){
        const userExtractorMw = createUserExtractorMw(logger);
        const ctx = {
            state: {
                token: "atoken",
            },
            request: {
                id: 1,
            }
        };

        yield userExtractorMw(ctx, next);
        const actual = ctx.status;
        const expected = 500;

        tap.equal(actual, expected, "With no userId, should set ctx.status to 500");
    })();

    tap.end();
}));
