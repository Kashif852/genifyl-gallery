"use client";
import { photoItems } from "@/data/workItems";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

const buttons = [
  { label: "Apparel", filter: ".c1" },
  { label: "Wall Art", filter: ".c2" },
  { label: "Scene", filter: ".c4" },
  { label: "Mug", filter: ".c3" },
];

export default function Filter() {
  const [activeFilter, setActiveFilter] = useState('.c1');

  // Memoize filtered items to prevent unnecessary recalculations
  const filteredItems = useMemo(() => {
    return photoItems.filter(item => 
      activeFilter === '*' || item.category.includes(activeFilter.replace('.', ''))
    );
  }, [activeFilter]);

  return (
    <div className="filter" style={{marginTop: "5rem"}}>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-2 text-center">
              <div className="main-title">
                Explore Genifyl Wonders: Your AI-Driven{" "}
                <span className="animation-text tf-color-blue">Photo Solutions</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="widget-filter-isotope">
              <div className="button-group filters-button-group">
                {buttons.map((elm) => (
                  <button
                    key={elm.filter}
                    onClick={() => setActiveFilter(elm.filter)}
                    className={`button ${
                      activeFilter === elm.filter ? "is-checked" : ""
                    }`}
                  >
                    {elm.label}
                  </button>
                ))}
              </div>
              <div className="grid">
                {filteredItems.map((elm) => (
                  <div
                    key={elm.title}
                    className={`element-item ${elm.category}`}
                  >
                    <div className="box-image"  >
                      <Image
                        src={elm.image}
                        width={410}
                        height={380}
                        alt={elm.title}
                        loading="lazy"
                        priority={false}
                        style={{borderRadius: "20px"}}
                      />
                      <h4>
                        <a href="#">{elm.title}</a>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}