import React, {Component} from "react";
import Requirement from "./ContentElements";

export default class TableData extends Component {

    render() {
        const systemData = {system: [{os: 'Windows 7 / 8 / 10', index: 1}, {os: 'OS X 10.10 or later', index: 2}, {os:'Ubuntu 14.04, 16.04 or newer', index: 3}],
            processor: '2 Ghz',
            memory: '2 GB RAM',
            graphics: [{graphics: '256 MB video memory, shader model 3.0+', index: 1},
                {graphics: '256 mb video memory, OpenGL 2 , Supported resolution: minimum 1280x1024 (for 4:3 aspect ratio) or 1280x720 (for 16:9)', index: 2},
                {graphics:'256 mb video memory, OpenGL 2', index: 3}],
            storage: '500 MB available space'
        };

        const systemName = [{os: 'Windows'}, {os:'Os X'}, {os:'Linux'}]

        return (
            <Requirement headData = {systemName} bodyData = {systemData} />
        )
    }
}

