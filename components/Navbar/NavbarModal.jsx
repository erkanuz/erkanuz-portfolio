import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './style.module.scss'

const NavbarModal = ({ menuLinks, socialLinks }) => {
  const pathname = usePathname();

  return (
    <div className={`${styles.menu_overlay} menu_overlay`}>
      <div className={styles.menu_copy}>
        <div className={styles.menu_links}>
          {menuLinks.map((link, index) => (
            <div className={styles.menu_link_item} key={index}>
              <div className={`${styles.menu_link_item_holder} menu_link_item_holder`}>
                <Link href={link.link} className={styles.menu_link}>
                  <span className={pathname === link.link ? styles.active : ''}>{link.title}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*BOTTOM ELEMENTS*/}
      <div className={styles.bottom_elements}>
        <div className={styles.social_links}>
          {socialLinks.map((links, id) => (
            <div className={styles.box} key={id}>
              <div className={`${styles.social_items} social_items`}>
                <a className={styles.socials} href={links.to}>{links.title} &#8599;</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.reels}>
          <div className={`${styles.show_reels} show_reels`}>
            <p> Currently based<br/> in Burgas, Bulgaria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarModal;
