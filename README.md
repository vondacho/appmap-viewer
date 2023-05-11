# appmap-viewer

This project aims to provide a solution for the presentation of [AppMap](https://appmap.io/product) resources through a web browser, 
as the [app.land](https://app.land) cloud solution no longer offers hosting of personal AppMap JSON resources.

Concretely, the functionality implemented by the [@appland/appmap](https://www.npmjs.com/package/@appland/appmap) project is taken over 
and packaged as a NodeJS web application.

## Getting started

Start the AppMap viewer on local port 3000 with `docker run -it -p 3000:8080 ghcr.io/vondacho/appmap-viewer:latest`.

### Remote AppMap resources

Then, visualize your AppMap resource from the web browser at `http://localhost:3000/appmap/appmap.html?appmap=<url_to_your_appmap_json>`.

Here is [an example](http://localhost:3000/appmap/appmap.html?appmap=https://vondacho.github.io/arch-blueprint-java/appmap/edu_obya_blueprint_customer_adapter_rest_CustomerEndpointIT_shouldCreateAndModifyAndDeleteCustomer.appmap.json).

### Local AppMap resources

Use of private hosting on the AppMap viewer server.

Start the AppMap viewer on local port 3000 with `docker run -it -p 3000:8080 -v <local_dir>:/usr/maps ghcr.io/vondacho/appmap-viewer:latest`,

it binds one local directory (`-v $(pwd):/usr/maps`) or (`-v <local_dir>:/usr/maps`) with the hosting directory on the server.

Depose your AppMap JSON resource into your local directory, and then visualize it from the web browser at 
`http://localhost:3000/appmap/appmap.html?appmap=/maps/<your_appmap_json>`.

## Latest release
Pull [the latest image](https://github.com/vondacho/appmap-viewer/pkgs/container/appmap-viewer) from the GitHub registry.