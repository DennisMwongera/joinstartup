import { MenuItem } from "@/data/menu";

export const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <li key={index} className="nav-item">
        <a href={item.href} className="nav-link">
          {item.title}
          {item.submenu && <i className="fas fa-angle-down" />}
        </a>
        {item.submenu && (
          <ul className="dropdown-menu">{renderMenuItems(item.submenu)}</ul>
        )}
      </li>
    ));
  };