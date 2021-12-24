import { getPerformance, trace } from "firebase/performance";
import firebaseApp from "./index";

const performance = getPerformance(firebaseApp);

export default performance;
export { trace }; // Use trace to measure custom performance metrics.
