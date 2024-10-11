import { LLMOptions, ModelProvider } from "../..";
import OpenAI from "./OpenAI";

class Lambda extends OpenAI {
    static providerName: ModelProvider = "lambda";

    static defaultOptions: Partial<LLMOptions> = {
        apiBase: "https://inference.lambdalabs.com/v1",
    };
}

export default Lambda;
