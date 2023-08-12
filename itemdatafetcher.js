fetch('https://raw.githubusercontent.com/realdint/Miners-Haven-Mod/main/items_data.json')
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`Error fetching JSON. Status: ${response.status}, Response: ${text}`);
            });
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('items-container');

        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            // Name
            const itemName = document.createElement('h2');
            itemName.textContent = item.ItemName;
            itemDiv.appendChild(itemName);

            // Image
            const itemImage = document.createElement('img');
            itemImage.src = `https://www.roblox.com/asset-thumbnail/image?assetId=${item.ThumbnailId}&width=420&height=420&format=png`;
            itemImage.alt = item.ItemName;
            itemImage.className = 'thumbnail';
            itemDiv.appendChild(itemImage);

            // Description
            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.Description;
            itemDiv.appendChild(itemDescription);

            // Tier
            const itemTier = document.createElement('p');
            itemTier.textContent = `Tier: ${item.TierName}`;
            itemDiv.appendChild(itemTier);

            // Hitbox
            const itemHitbox = document.createElement('p');
            itemHitbox.textContent = `Hitbox - X: ${item.HitboxSize.X}, Y: ${item.HitboxSize.Y}, Z: ${item.HitboxSize.Z}`;
            itemDiv.appendChild(itemHitbox);

            // Append to container
            container.appendChild(itemDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching the items:', error);
    });
