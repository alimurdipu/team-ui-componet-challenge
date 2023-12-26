import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Avatar from "../components/Elements/Avatar/Avatar";
import Alert from "../components/Elements/Alert/Alert";
import Badge from "../components/Elements/Badge/Badge";
import Breadcrumb from "../components/Elements/Breadcrumb/Breadcrumb";
import Button from "../components/Elements/Button/Button";
import ButtonGroup from "../components/Elements/ButtonGroup/ButtonGroup";
import Card from "../components/Elements/Card/Card";
import Divider from "../components/Elements/Divider/Divider";
import Forms from "../components/Elements/Forms/Forms";
import Mask from "../components/Elements/Mask/Mask";
import Progress from "../components/Elements/Progress/Progress";
import Skeleton from "../components/Elements/Skeleton/Skeleton";
import Spinner from "../components/Elements/Spinner/Spinner";
import Tag from "../components/Elements/Tag/Tag";
import Typography from "../components/Elements/Typography/Typography";
import Elements from "../pages/Elements/Elements";
import Components from "../pages/Components/Components";
import Accordion from "../components/Accordion/Accordion";
import Dropdown from "../components/Dropdown/Dropdown";
import Pagination from "../components/Pagination/Pagination";
import MenuList from "../components/MenuList/MenuList";
import Tooltip from "../components/Elements/Tooltip/Tooltip";
import Collapse from "../components/Collapse/Collapse";
import Tab from "../components/Tab/Tab";
import Popover from "../components/Popover/Popover";
import Modal from "../components/Modal/Modal";
import Drawer from "../components/Drawer/Drawer";
import Steps from "../components/Steps/Steps";
import Timeline from "../components/Timeline/Timeline";
import Treeview from "../components/Treeview/Treeview";
import Table from "../components/Table/Table";
import TableAdvanced from "../components/TableAdvanced/TableAdvanced";
import TableGridjs from "../components/TableGridjs/TableGridjs";
import Apexcharts from "../components/Apexcharts/Apexcharts";
import Carousel from "../components/Carousel/Carousel";
import Notification from "../components/Notification/Notification";
import Clipboard from "../components/Clipboard/Clipboard";
import Persist from "../components/Persist/Persist";
import MonochromeMode from "../components/MonochromeMode/MonochromeMode";

export const reactRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/elements",
    element: <Elements />,
    children: [
      {
        path: "avatar",
        element: <Avatar />,
      },
      {
        path: "alert",
        element: <Alert />,
      },
      {
        path: "badge",
        element: <Badge />,
      },
      {
        path: "breadcrumb",
        element: <Breadcrumb />,
      },
      {
        path: "button",
        element: <Button />,
      },
      {
        path: "button-group",
        element: <ButtonGroup />,
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "divider",
        element: <Divider />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "mask",
        element: <Mask />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "skeleton",
        element: <Skeleton />,
      },
      {
        path: "spinner",
        element: <Spinner />,
      },
      {
        path: "tag",
        element: <Tag />,
      },
      {
        path: "tooltip",
        element: <Tooltip />,
      },
      {
        path: "typography",
        element: <Typography />,
      },
    ],
  },
  {
    path: "components",
    element: <Components />,
    children: [
      {
        path: "accordion",
        element: <Accordion />,
      },
      {
        path: "collapse",
        element: <Collapse />,
      },
      {
        path: "tab",
        element: <Tab />,
      },
      {
        path: "dropdown",
        element: <Dropdown />,
      },
      {
        path: "popover",
        element: <Popover />,
      },
      {
        path: "modal",
        element: <Modal />,
      },
      {
        path: "drawer",
        element: <Drawer />,
      },
      {
        path: "steps",
        element: <Steps />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "pagination",
        element: <Pagination />,
      },
      {
        path: "menu-list",
        element: <MenuList />,
      },
      {
        path: "treeview",
        element: <Treeview />,
      },
      {
        path: "table",
        element: <Table />,
      },
      {
        path: "table-advanced",
        element: <TableAdvanced />,
      },
      {
        path: "table-gridjs",
        element: <TableGridjs />,
      },
      {
        path: "apexcharts",
        element: <Apexcharts />,
      },
      {
        path: "carousel",
        element: <Carousel />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "clipboard",
        element: <Clipboard />,
      },
      {
        path: "persist",
        element: <Persist />,
      },
      {
        path: "monochrome-mode",
        element: <MonochromeMode />,
      },
    ],
  },
]);
