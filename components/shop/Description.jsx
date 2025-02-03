"use client";
const tabs = [
  { text: "Description" },
  { text: "Additional information" },
  { text: "Questions and Answers" },
  { text: "Customer Reviews" },
];
import { useState } from "react";

export default function Description() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabs-description">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="widget-tabs">
              <ul className="widget-menu-tab">
                {tabs.map((elm, i) => (
                  <li
                    onClick={() => setActiveTab(i)}
                    key={i}
                    className={`item-title ${activeTab == i ? "active" : ""}`}
                  >
                    <span className="inner">{elm.text}</span>
                  </li>
                ))}
              </ul>
              <div className="widget-content-tab">
                {activeTab == 0 ? (
                  <div className="widget-content-inner fadeTabContent active">
                    <p className="">
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account the system expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it pleasure
                      but because those who do not know how to pursue pleasure
                      rationally encounter consequences that are extremely
                      painful. Nor again is there anyone who loves or pursues or
                      desires to obtain pain of itself, because it is pain, but
                      because occasionally
                    </p>
                    <h4>Powerful performance</h4>
                    <ul>
                      <li>
                        <p>English-language MacBook Pro</p>
                      </li>
                      <li>
                        <p>
                          10-core Apple M1 Pro chip for a giant leap in CPU,
                          GPU, and machine learning performance
                        </p>
                      </li>
                      <li>
                        <p>
                          16GB of RAM so everything you do is fast and fluid
                        </p>
                      </li>
                      <li>
                        <p>
                          16-core Neural Engine for advanced machine learning
                        </p>
                      </li>
                      <li>
                        <p>16-core GPU</p>
                      </li>
                      <li>
                        <p>
                          Ultrafast 1TB solid state drive (SSD) is blazing fast,
                          so you can take all your photos and videos with you no
                          matter.
                        </p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}{" "}
                {activeTab == 1 ? (
                  <div className="widget-content-inner fadeTabContent active">
                    <p className="">
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account the system expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it pleasure
                      but because those who do not know how to pursue pleasure
                      rationally encounter consequences that are extremely
                      painful. Nor again is there anyone who loves or pursues or
                      desires to obtain pain of itself, because it is pain, but
                      because occasionally
                    </p>
                    <h4>Powerful performance</h4>
                    <ul>
                      <li>
                        <p>English-language MacBook Pro</p>
                      </li>
                      <li>
                        <p>
                          10-core Apple M1 Pro chip for a giant leap in CPU,
                          GPU, and machine learning performance
                        </p>
                      </li>
                      <li>
                        <p>
                          16GB of RAM so everything you do is fast and fluid
                        </p>
                      </li>
                      <li>
                        <p>
                          16-core Neural Engine for advanced machine learning
                        </p>
                      </li>
                      <li>
                        <p>16-core GPU</p>
                      </li>
                      <li>
                        <p>
                          Ultrafast 1TB solid state drive (SSD) is blazing fast,
                          so you can take all your photos and videos with you no
                          matter.
                        </p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}{" "}
                {activeTab == 2 ? (
                  <div className="widget-content-inner fadeTabContent active">
                    <p className="">
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account the system expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it pleasure
                      but because those who do not know how to pursue pleasure
                      rationally encounter consequences that are extremely
                      painful. Nor again is there anyone who loves or pursues or
                      desires to obtain pain of itself, because it is pain, but
                      because occasionally
                    </p>
                    <h4>Powerful performance</h4>
                    <ul>
                      <li>
                        <p>English-language MacBook Pro</p>
                      </li>
                      <li>
                        <p>
                          10-core Apple M1 Pro chip for a giant leap in CPU,
                          GPU, and machine learning performance
                        </p>
                      </li>
                      <li>
                        <p>
                          16GB of RAM so everything you do is fast and fluid
                        </p>
                      </li>
                      <li>
                        <p>
                          16-core Neural Engine for advanced machine learning
                        </p>
                      </li>
                      <li>
                        <p>16-core GPU</p>
                      </li>
                      <li>
                        <p>
                          Ultrafast 1TB solid state drive (SSD) is blazing fast,
                          so you can take all your photos and videos with you no
                          matter.
                        </p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}{" "}
                {activeTab == 3 ? (
                  <div className="widget-content-inner fadeTabContent active">
                    <p className="">
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account the system expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it pleasure
                      but because those who do not know how to pursue pleasure
                      rationally encounter consequences that are extremely
                      painful. Nor again is there anyone who loves or pursues or
                      desires to obtain pain of itself, because it is pain, but
                      because occasionally
                    </p>
                    <h4>Powerful performance</h4>
                    <ul>
                      <li>
                        <p>English-language MacBook Pro</p>
                      </li>
                      <li>
                        <p>
                          10-core Apple M1 Pro chip for a giant leap in CPU,
                          GPU, and machine learning performance
                        </p>
                      </li>
                      <li>
                        <p>
                          16GB of RAM so everything you do is fast and fluid
                        </p>
                      </li>
                      <li>
                        <p>
                          16-core Neural Engine for advanced machine learning
                        </p>
                      </li>
                      <li>
                        <p>16-core GPU</p>
                      </li>
                      <li>
                        <p>
                          Ultrafast 1TB solid state drive (SSD) is blazing fast,
                          so you can take all your photos and videos with you no
                          matter.
                        </p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
