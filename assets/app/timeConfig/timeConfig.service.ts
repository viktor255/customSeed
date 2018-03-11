import { TimeConfig } from "./timeConfig.model";
import { Injectable } from "@angular/core";

@Injectable()
export class TimeConfigService{
    timeConfigs: TimeConfig[] = [];

    checkTime(time:string){
        return
    }

    addTimeConfig(timeConfig: TimeConfig) {
        // if not already in array add new timeConfig else change temperature
        const indexNum = this.timeConfigs.findIndex(x => x.time == timeConfig.time);
        if(indexNum == -1){
            // create
            this.timeConfigs.push(timeConfig);
        } else {
            // update
            this.timeConfigs[indexNum].temperature = timeConfig.temperature;
        }
    }

    editConfig(timeConfig: TimeConfig){

    }

    updateTimeConfig(timeConfig: TimeConfig){

    }

    deleteTimeConfig(timeConfig: TimeConfig){
        this.timeConfigs.splice(this.timeConfigs.indexOf(timeConfig),1);
    }

    getTimeConfigs() {
        return this.timeConfigs;
    }
}