import React from "react";
import CardServicio from "./CardServicio";

export default class PanelServicios extends React.Component {
    render() {
        return (
            <div>
                <h2>Servicios activos</h2>
                <hr className="w-25"/>

                <div className="d-flex">
                    <CardServicio />
                    <CardServicio />
                </div>
            </div>
        );
    }
}