<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Decentralized File Storage Verification dApp</h3>

  <p align="center">
    The documentation for the decentralized file storage verification dApp.
  </p>
</div>

## About
<p>
    This dApp allows users to upload files and metadata, verifies file integrity and ownership, and provides a mechanism for dispute resolution.
</p>
<p> 
    It's built on Cartesi rollups technology to ensure decentralized and reliable file storage and verification.
</p>

## Getting Started

Below you'll find instructions on how to set up this dApp locally.

### Prerequisites

Here are some packages you need to have installed on your PC:

* [nodejs](https://nodejs.org/en), [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) 
* [docker](https://docs.docker.com/get-docker/)
* [cartesi-cli](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)
  ```sh
  npm install -g @cartesi/cli
  ```

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/your-repo/decentralized-file-storage-verification.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Build and run the dApp via `cartesi-cli`
   ```

sh
   cartesi build
   cartesi run
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Here's a quick overview of the API endpoints:

- **POST `/uploadFile`**: Upload a file and its metadata.
  - Request body: `{ owner: address, file: buffer, metadata: object }`
  - Response: `{ ok: boolean, message: string, data: object }`

- **POST `/verifyFileIntegrity`**: Verify file integrity and ownership.
  - Request body: `{ fileId: UUID, owner: address, fileHash: string }`
  - Response: `{ ok: boolean, message: string }`

- **POST `/resolveDispute`**: Resolve disputes over file ownership or integrity.
  - Request body: `{ fileId: UUID, owner: address, disputeDetails: object }`
  - Response: `{ ok: boolean, message: string, data: object }`

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>