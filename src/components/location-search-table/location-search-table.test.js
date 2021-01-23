import React from "react";
import { shallow } from "enzyme";
import LocationSearchTable from "./location-search-table";

describe("LocationSearchTable", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LocationSearchTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
