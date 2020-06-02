import React from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import style from "./search.module.css";

function Search() {
  return (
    <div className={`${style.search} flex ai-center`}>
      <Input className={style.input} fullWidth />
      <Button className={style.button} primary>
        Buscar
      </Button>
    </div>
  );
}

export default Search;
