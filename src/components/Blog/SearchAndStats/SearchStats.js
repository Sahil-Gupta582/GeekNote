import "./SearchStats.css";
import { Input } from "mdbreact";
import tagDetails from "../../../data/tag_details.json";
import { useState } from "react";

function SearchStats({ transfer_data_tag }) {
  const [input, setInput] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="SearchBar col-sm-12">
          {/* styling to be added here */}
          <Input
            className="bar-style"
            icon="search"
            value={input}
            onInput={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Search: Title, Topic, Writer"
          />
          <button
            onClick={() => {
              setInput(input);
              if (input === "") transfer_data_tag("All");
              else transfer_data_tag(input);
            }}
          >
            search
          </button>
        </div>
        <div className="for_tags col-sm-12">
          {tagDetails.map((tag_name) => {
            return (
              <p
                className="render_tag"
                key={tag_name.id}
                style={{
                  cursor: "pointer",
                  border: `1.5px solid ${tag_name.color}`,
                }}
                onClick={() => {
                  transfer_data_tag(tag_name.tag);
                }}
              >
                {tag_name.tag}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SearchStats;
