import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddlewre } from "./middlewares";

const app = express(); // 익스프레스 프레임워크

app.set("view engine", "pug"); // node js 와 같이 사용할 프론트엔드 엔진 설정
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json()); // post 넘어온 json 데이터를 받기위한 모듈
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); //보안관련
app.use(morgan("dev"));
app.use(localsMiddlewre);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;