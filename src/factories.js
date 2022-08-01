import {AxiosOperationService} from "./service/OperationService";

export default {
    getOperationService() {
        return new AxiosOperationService();
    }
};