import { TimeConfig } from "./timeConfig.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class TimeConfigService{
    timeConfigs: TimeConfig[] = [];

    constructor(private httpClient: HttpClient){}

    // checkTime(time:string){
    //     return
    // }

    addTimeConfig(timeConfig: TimeConfig): Observable<TimeConfig> {
        // if not already in array add new timeConfig else change temperature
        const indexNum = this.timeConfigs.findIndex(x => x.time == timeConfig.time);
        if(indexNum == -1){
            // create
            this.timeConfigs.push(timeConfig);
            return this.httpClient.post<TimeConfig>('http://localhost:3000/timeConfig', timeConfig);
        } else {
            // update
            // this.timeConfigs[indexNum].temperature = timeConfig.temperature;
        }
    }

    editConfig(timeConfig: TimeConfig){

    }

    updateTimeConfig(timeConfig: TimeConfig){

    }

    deleteTimeConfig(timeConfig: TimeConfig): Observable<TimeConfig> {
        this.timeConfigs.splice(this.timeConfigs.indexOf(timeConfig),1);
        return this.httpClient.delete<TimeConfig>('http://localhost:3000/timeConfig/' + timeConfig.timeConfigId);
    }

    getTimeConfigs() {
        return this.httpClient.get<TimeConfig[]>('http://localhost:3000/timeConfig')
            .map( (data: any) => {
                //console.log(messages);
                const transformedTimeConfigs: TimeConfig[] = [];
                for (const timeConfig of data.obj) {
                    transformedTimeConfigs.push(new TimeConfig(
                        timeConfig.time,
                        timeConfig.temperature,
                        timeConfig._id)
                    );
                }
                //console.log(transformedMessages);
                this.timeConfigs = transformedTimeConfigs;
                return transformedTimeConfigs;
            });
    }
}