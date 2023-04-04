// import { Iuser } from "../../types";
import axios from "./axios";

export const fetchDictionary = async () => {
	return await axios
		.get("/define", { params: { term: "wat" } })
		.then((res) => res.data);
};