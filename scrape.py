from playwright.sync_api import sync_playwright
import csv

def scrape_avis(profile_url):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(profile_url)

        # 1. Trouver les liens de services
        services_links = page.query_selector_all('a[href^="/fr/service/"]')
        urls = list(set([f"https://comeup.com{link.get_attribute('href')}" for link in services_links]))

        all_avis = []

        for service_url in urls:
            page.goto(service_url)
            # Scroll / load avis (ajouter logique ici)

            avis_elements = page.query_selector_all('div.review-card')  # à ajuster selon le HTML réel

            for avis in avis_elements:
                client = avis.query_selector('h3').inner_text()
                note = len(avis.query_selector_all('svg.star-filled'))  # ex : 5 étoiles
                comment = avis.query_selector('p').inner_text()
                date = avis.query_selector('time').inner_text()

                all_avis.append({
                    "service_url": service_url,
                    "client": client,
                    "note": note,
                    "commentaire": comment,
                    "date": date
                })

        browser.close()

        # Sauvegarde CSV
        with open("avis_comeup.csv", "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=all_avis[0].keys())
            writer.writeheader()
            writer.writerows(all_avis)

if __name__ == "__main__":
    scrape_avis("https://comeup.com/fr/@martin-js")
